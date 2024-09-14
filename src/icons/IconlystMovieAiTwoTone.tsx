import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieAiTwoTone = ({
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
      d="M20.128 10.354V7.767c0-2.793-1.74-4.767-4.535-4.767H7.595C4.798 3 3.06 4.974 3.06 7.767v7.613c0 2.792 1.74 4.766 4.535 4.766h2.609M3.066 7.469h17.057"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.623 7.468V3m5.942 4.468V3M17.026 13.933l.12.327a4.5 4.5 0 0 0 2.656 2.66l.326.12-.326.12a4.5 4.5 0 0 0-2.655 2.66l-.12.327-.122-.327a4.5 4.5 0 0 0-2.655-2.66l-.326-.12.326-.12a4.5 4.5 0 0 0 2.656-2.66zM10.354 11.798c.253.83.902 1.48 1.732 1.734a2.6 2.6 0 0 0-1.732 1.734 2.6 2.6 0 0 0-1.731-1.734 2.6 2.6 0 0 0 1.731-1.734"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMovieAiTwoTone;
