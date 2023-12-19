import { GraphQLScalarType, GraphQLString } from 'graphql';
import { Type } from '@nestjs/common';
import { Field } from '@nestjs/graphql';

export function createFilterClass<T extends typeof GraphQLScalarType>(
  FilterType: Type<T>,
) {
  class FilterComparators {
    @Field(() => FilterType, { nullable: true })
    eq?: T;
  }
  return FilterComparators;
}

export class StringFilter extends createFilterClass(GraphQLString) {}
