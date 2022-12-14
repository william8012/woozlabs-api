import { BlogArticleDTO } from '@/models/blog/contents';
import {
  articleRepository,
  ArticleRepositoryOptions,
  ArticleRepositoryResponse,
} from '@/repository/blog/contents/articles';
import express from 'express';

export interface ArticleService {
  getArticleById(_id: string): Promise<BlogArticleDTO>;
  getArticleCollection(
    options: ArticleRepositoryOptions
  ): Promise<ArticleRepositoryResponse>;

  createArticle(articleDTO: BlogArticleDTO): Promise<string>;
  updateArticle(id: string, articleDTO: BlogArticleDTO): Promise<string>;
}

export const articleService: ArticleService = {
  async getArticleById(_id: string): Promise<BlogArticleDTO> {
    try {
      const data = await articleRepository.find(_id);
      return data;
    } catch (err) {
      throw err;
    }
  },
  async getArticleCollection(
    options: ArticleRepositoryOptions
  ): Promise<ArticleRepositoryResponse> {
    try {
      const data = await articleRepository.findAll(options);
      return data;
    } catch (err) {
      throw err as Error;
    }
  },
  async createArticle(articleDTO: BlogArticleDTO): Promise<string> {
    try {
      const id = await articleRepository.create(articleDTO);
      return id;
    } catch (err) {
      throw err;
    }
  },
  async updateArticle(
    _id: string,
    articleDTO: BlogArticleDTO
  ): Promise<string> {
    try {
      const id = await articleRepository.update(_id, articleDTO);
      return id;
    } catch (err) {
      throw err;
    }
  },
};
