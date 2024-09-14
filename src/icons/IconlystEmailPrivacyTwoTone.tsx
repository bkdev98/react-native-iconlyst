import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailPrivacyTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.383 10.4V8.728c0-2.745-1.833-4.98-4.552-4.98H8.053c-2.72 0-4.553 2.235-4.553 4.98v6.141c0 2.747 1.833 4.98 4.553 4.974h4.308"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.72 8.98-3.973 3.23a2.056 2.056 0 0 1-2.557 0L7.184 8.98"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.738 20.251s2.739-.829 2.739-3.115.099-2.213-.121-2.435-2.26-.931-2.618-.931c-.36 0-2.399.71-2.619.93s-.12.15-.12 2.436 2.739 3.115 2.739 3.115"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailPrivacyTwoTone;
