import { type User, type InsertUser, type ContactSubmission, type InsertContactSubmission, contactSubmissions } from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db.js";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private submissions: ContactSubmission[];

  constructor() {
    this.users = new Map();
    this.submissions = [];
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const record: ContactSubmission = {
      ...submission,
      id: randomUUID(),
      createdAt: new Date(),
    };
    this.submissions.push(record);
    return record;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return [...this.submissions].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
}

export class DatabaseStorage implements IStorage {
  async getUser(_id: string): Promise<User | undefined> {
    return undefined;
  }

  async getUserByUsername(_username: string): Promise<User | undefined> {
    return undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    return { ...insertUser, id };
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const [record] = await db
      .insert(contactSubmissions)
      .values(submission)
      .returning();
    return record;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return db.select().from(contactSubmissions)
      .orderBy(contactSubmissions.createdAt);
  }
}

export const storage = new DatabaseStorage();
