import { GraphQLScalarType, GraphQLString } from 'graphql';
import { Type } from '@nestjs/common';
import { Field } from '@nestjs/graphql';

export function createFilterClass<T extends GraphQLScalarType>(FilterType: T) {
  class FilterComparators {
    @Field(() => FilterType.constructor as Type<T>, { nullable: true })
    eq?: T;
  }
  return FilterComparators;
}

export class StringFilter extends createFilterClass(GraphQLString) {}
