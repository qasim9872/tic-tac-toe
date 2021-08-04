import { firestore } from '../../firebase/firebase.core'

const COLLECTION_NAME = 'secrets'

export const getSecretsRequest = async () => {
  const snapshots = await firestore.collection(COLLECTION_NAME).get()

  return snapshots.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }))
}

export const transformSecret = secret => {
  console.log(`transforming secret`, secret)

  return { ...secret, text: secret.secretText }
}

export const addSecretRequest = async ({ secretText, author }) => {
  const createdOn = new Date().toISOString()
  const data = {
    author,
    createdOn,
    secretText,
  }

  console.log(`adding secret to collection`, data)

  const ref = await firestore.collection(COLLECTION_NAME).add(data)

  return ref.id
}
