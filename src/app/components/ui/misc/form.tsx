/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useCart } from "@/context/carthandler/page"

const formSchema = z.object({
  name: z.string().min(4, {
    message: "Username must be at least 4 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  address: z.string().min(2, {
    message: "Address must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  postalCode: z.string().min(5, {
    message: "Postal code must be at least 5 characters.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  country: z.string().min(2, {
    message: "Country must be at least 2 characters.",
  })
  
})

export function CheckoutForm() {
  const { cartItems } = useCart()
  const clearCart = () => localStorage.removeItem('cart');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      postalCode: "",
      city: "",
      country: "",
    },
  })

  async function handleCheckout(values: z.infer<typeof formSchema>) {
    try {
      const items = cartItems.map((item: any) => ({
        productId: item.product._id,
        quantity: item.quantity,
      }));
  
      if (items.length === 0) {
        alert("Cart is empty. Please add items before checkout.");
        return;
      }

      if (cartItems.some((item: any) => !item.product || !item.product._id)) {
        alert("Some items in the cart are invalid. Please try again.");
        return;
      }      
  
      const customerData = {
        user: {
          name: values.name,
          email: values.email,
          address: values.address,
          phone: values.phone,
          postalCode: values.postalCode,
          city: values.city,
          country: values.country,
        },
        createdAt: new Date().toISOString(),
    }
      const formResponse = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerData),
      });
  
      if (!formResponse.ok) {
        const formError = await formResponse.json();
        alert(`Failed to save customer: ${formError.message}`);
        return;
      }
  
      const customerResponse = await formResponse.json();
      const customerId = customerResponse._id;
  
      const orderResponse = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerId,
          items,
        }),
      });
  
      if (orderResponse.ok) {
        alert("Order placed successfully!");
        clearCart();
        window.location.href = "/";
      } else {
        const orderError = await orderResponse.json();
        alert(`Failed to place order: ${orderError.message}`);
      }
    } catch (error) {
      alert(`Error during checkout: ${error}`);
    }
  }
    
  
  
  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(handleCheckout)} >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="Email" {...field} />
              </FormControl>
              <FormDescription>
              This is your public display email.
              </FormDescription>
              <FormMessage />
              </FormItem>
            )}
            />
        <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <Input placeholder="Valid Phone" {...field} />
              </FormControl>
              <FormDescription>
              Enter Your Phone Number (only for Verification)
              </FormDescription>
              <FormMessage />
              </FormItem>
            )}
            />
        <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address</FormLabel>
            <FormControl>
              <Input placeholder="Address" {...field} />
              </FormControl>
              <FormDescription>
              Enter your Full House Address
              </FormDescription>
              <FormMessage />
              </FormItem>
            )}
            />
        <FormField
        control={form.control}
        name="country"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Country</FormLabel>
            <FormControl>
              <Input placeholder="Country" {...field} />
              </FormControl>
              <FormDescription>
              Enter your Country
              </FormDescription>
              <FormMessage />
              </FormItem>
            )}
            />
        <FormField
        control={form.control}
        name="city"
        render={({ field }) => (
          <FormItem>
            <FormLabel>City</FormLabel>
            <FormControl>
              <Input placeholder="City" {...field} />
              </FormControl>
              <FormDescription>
              Enter your City
              </FormDescription>
              <FormMessage />
              </FormItem>
            )}
            />
        <FormField
        control={form.control}
        name="postalCode"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Postal Code</FormLabel>
            <FormControl>
              <Input placeholder="Postal Code" {...field} />
              </FormControl>
              <FormDescription>
              Postal Code (in 5 Digits)
              </FormDescription>
              <FormMessage />
              </FormItem>
            )}
            />
        <button type="submit">Submit</button>
      </form>
    </Form>
  )

}