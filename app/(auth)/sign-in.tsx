import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const SignIn = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerClassName='h-full'>
      <Text>Hello User!</Text>
      <Text>Create your account for better Experience</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn