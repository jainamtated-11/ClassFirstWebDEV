import { NextResponse } from "next/server"

// This is our in-memory storage. In a real application, this would be a database.
let cart: CartItem[] = []

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export async function GET() {
  try {
    return NextResponse.json(cart)
  } catch (error) {
    console.error("Error in GET /api/cart:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const item: CartItem = await request.json()
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id)

    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += item.quantity
    } else {
      cart.push(item)
    }

    return NextResponse.json(cart)
  } catch (error) {
    console.error("Error in POST /api/cart:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const { id, quantity }: { id: number; quantity: number } = await request.json()
    const itemIndex = cart.findIndex((item) => item.id === id)

    if (itemIndex > -1) {
      cart[itemIndex].quantity = quantity
      return NextResponse.json(cart)
    }

    return NextResponse.json({ error: "Item not found" }, { status: 404 })
  } catch (error) {
    console.error("Error in PUT /api/cart:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { id }: { id: number } = await request.json()
    cart = cart.filter((item) => item.id !== id)
    return NextResponse.json(cart)
  } catch (error) {
    console.error("Error in DELETE /api/cart:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

