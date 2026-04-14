
import WordList from '@/pages/WordList'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wordlist')({
  component: WordList,
})

