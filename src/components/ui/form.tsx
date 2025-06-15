"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  type UseFormReturn,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

// Context for form field state
const FormFieldContext = React.createContext<{ name: string } | undefined>(undefined)
const FormItemContext = React.createContext<{ id: string } | undefined>(undefined)

// Hook to access form field state and IDs for accessibility
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }
  if (!itemContext) {
    throw new Error("useFormField should be used within <FormItem>")
  }

  const fieldState = getFieldState(fieldContext.name, formState)
  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

// Main Form wrapper, provides context to all child form components
function Form<TFormValues extends Record<string, any>>({ children, ...props }: React.PropsWithChildren<UseFormReturn<TFormValues>>) {
  return <FormProvider {...props}>{children}</FormProvider>
}

// FormField: Wraps a single field, provides name context
function FormField({ name, children }: { name: string; children: React.ReactNode }) {
  return <FormFieldContext.Provider value={{ name }}>{children}</FormFieldContext.Provider>
}

// FormItem: Wraps a form item, provides ID context
function FormItem({ id, children }: { id: string; children: React.ReactNode }) {
  return <FormItemContext.Provider value={{ id }}>{children}</FormItemContext.Provider>
}

// FormLabel: Label for a form field
const FormLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label ref={ref} className={cn("block text-sm font-medium", className)} {...props} />
))
FormLabel.displayName = "FormLabel"

// FormControl: Wrapper for input/textarea/select
const FormControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
))
FormControl.displayName = "FormControl"

// FormDescription: Helper text for a field
const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-xs text-muted-foreground", className)} {...props} />
))
FormDescription.displayName = "FormDescription"

// FormMessage: Error or feedback message for a field
const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
