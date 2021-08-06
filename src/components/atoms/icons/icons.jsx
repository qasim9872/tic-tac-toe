import tw from 'twin.macro'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { TiTickOutline, TiTick } from 'react-icons/ti'
import { AiOutlineClose } from 'react-icons/ai'

export const icons = {
  email: tw(FaEnvelope)`w-5 h-5 text-gray-500`,
  linkedin: tw(FaLinkedinIn)`w-5 h-5 text-gray-500`,
  github: tw(FaGithub)`w-5 h-5 text-gray-500`,
  tick: tw(TiTickOutline)`w-8 h-8`,
  gameTick: tw(TiTick)``,
  gameCross: tw(AiOutlineClose)``,
}
