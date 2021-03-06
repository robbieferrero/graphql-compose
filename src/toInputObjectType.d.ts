import { GraphQLFieldConfig, GraphQLFieldConfigMap, GraphQLInputFieldConfig, GraphQLObjectType } from './graphql';
import InputTypeComposer from './inputTypeComposer';
import TypeComposer from './typeComposer';

export function removeWrongFields<TSource, TContext>(
    fields: GraphQLFieldConfigMap<TSource, TContext>): GraphQLFieldConfigMap<TSource, TContext>;

export interface ToInputObjectTypeOpts {
    prefix?: string;
    postfix?: string;
}

export function toInputObjectType(
    typeComposer: TypeComposer,
    opts?: ToInputObjectTypeOpts,
    cache?: Map<GraphQLObjectType, InputTypeComposer>): InputTypeComposer;

export interface ConvertInputObjectFieldOpts {
    prefix?: string;
    postfix?: string;
    fieldName?: string;
    outputTypeName?: string;
}

export function convertInputObjectField<TSource, TContext>(
    field: GraphQLFieldConfig<TSource, TContext>,
    opts: ConvertInputObjectFieldOpts,
    cache: Map<GraphQLObjectType, InputTypeComposer>): GraphQLInputFieldConfig;
