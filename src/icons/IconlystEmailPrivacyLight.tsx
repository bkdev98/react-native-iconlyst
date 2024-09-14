import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailPrivacyLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.883 10.4V8.728c0-2.745-1.833-4.98-4.552-4.98H7.553C4.833 3.749 3 5.984 3 8.729v6.141c0 2.747 1.833 4.98 4.553 4.974h4.308"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.22 8.98-3.973 3.23a2.056 2.056 0 0 1-2.557 0L6.684 8.98"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.238 20.251s2.739-.829 2.739-3.115.099-2.213-.121-2.435-2.26-.931-2.618-.931c-.36 0-2.399.71-2.618.93-.22.22-.121.15-.121 2.436s2.739 3.115 2.739 3.115"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailPrivacyLight;
