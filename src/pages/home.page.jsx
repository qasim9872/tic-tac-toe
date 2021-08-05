import tw from 'twin.macro'
import React, { useState } from 'react'
import sub from 'date-fns/sub'
import format from 'date-fns/format'

import { AppTemplate } from '../components/templates/app.template'
import { Container } from '../components/atoms/utility/container.component'
import { NoticePeriodForm } from '../components/organisms/forms/notice-period-form.component'

export const Home = () => {
  const [noticeDate, setNoticeDate] = useState(null)

  const onSubmit = ({ noticePeriod, intendedTerminationDate }) => {
    const terminationDate = new Date(intendedTerminationDate)

    const newNoticeDate = sub(terminationDate, {
      days: noticePeriod,
    })
    setNoticeDate(format(newNoticeDate, 'do MMM yyyy'))
  }
  const onReset = () => setNoticeDate(null)

  return (
    <AppTemplate>
      <Container override={tw`flex-col`}>
        <div tw="flex justify-center items-center flex-col p-8">
          <h1 tw="prose font-bold text-4xl font-rubik">
            Find out your Notice Period
          </h1>
        </div>

        <div tw="w-full flex justify-center items-center">
          <NoticePeriodForm onSubmit={onSubmit} onReset={onReset} />
        </div>

        {noticeDate && (
          <div tw="w-full flex flex-col justify-center items-center p-8">
            <div tw="prose tracking-wide md:text-2xl">
              The last day to give your notice is:{' '}
              <span tw="font-bold">{noticeDate}</span>
            </div>
          </div>
        )}
      </Container>
    </AppTemplate>
  )
}
