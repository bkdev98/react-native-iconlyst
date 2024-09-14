import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightAirpodProBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.546 3.124c-1.808.835-3.012 2.191-3.479 4.15-.166.698-.165 1.406-.106 2.118.25 3 1.064 5.871 2.037 8.704l.015.042c.202.59.405 1.18.655 1.75.607 1.39 2.352 2.01 3.716 1.344a2.84 2.84 0 0 0 1.584-2.73c-.024-.388-.136-.752-.248-1.116q-.045-.14-.085-.28a473 473 0 0 0-.98-3.3c-.01-.031-.013-.064-.019-.09q.165-.019.328-.035c.234-.024.467-.047.699-.083a6.8 6.8 0 0 0 2.16-.71c.226-.12.28-.316.14-.531a2.45 2.45 0 0 1-.381-1.023 2 2 0 0 1-.013-.158l-.003-.142V9.237q.004-2.004-.004-4.008a2.44 2.44 0 0 1 .397-1.348 1 1 0 0 0 .06-.11c.07-.168.017-.33-.142-.417a6.8 6.8 0 0 0-1.979-.707c-1.499-.288-2.96-.165-4.352.477m3.329 5.33q-1.126.015-2.253 0a.997.997 0 0 1-.989-1.009 1.006 1.006 0 0 1 1.023-.99h2.19a.997.997 0 0 1 1.017.993.99.99 0 0 1-.988 1.006"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M15.192 12.008c-.395-.39-.558-.877-.563-1.417a165 165 0 0 1-.003-1.736l.001-.746v-.664q-.003-.883.002-1.768.002-.256.05-.51c.15-.77.68-1.306 1.404-1.392 1.212-.144 2.304.162 3.258.924.497.397.737.92.732 1.563-.008 1.215-.012 2.431.002 3.647.008.704-.268 1.248-.829 1.665a4.32 4.32 0 0 1-3.034.866c-.383-.032-.739-.155-1.02-.432"
    />
  </Svg>
);
export default IconlystRightAirpodProBold;
