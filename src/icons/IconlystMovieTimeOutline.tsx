import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieTimeOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M3.98 3.825C4.92 2.814 6.261 2.25 7.845 2.25h7.997c1.583 0 2.924.564 3.865 1.575.935 1.005 1.42 2.39 1.42 3.942v2.587a.75.75 0 0 1-1.5 0V7.767c0-1.242-.385-2.24-1.018-2.92-.627-.674-1.554-1.097-2.767-1.097H7.846c-1.214 0-2.141.423-2.769 1.097-.633.68-1.018 1.678-1.018 2.92v7.613c0 1.241.385 2.24 1.018 2.92.628.674 1.555 1.096 2.768 1.096h2.608a.75.75 0 0 1 0 1.5H7.845c-1.584 0-2.925-.564-3.866-1.575-.936-1.004-1.42-2.39-1.42-3.941V7.767c0-1.552.484-2.937 1.42-3.942"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.566 7.469a.75.75 0 0 1 .75-.75h17.057a.75.75 0 1 1 0 1.5H3.316a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.873 2.25a.75.75 0 0 1 .75.75v4.468a.75.75 0 1 1-1.5 0V3a.75.75 0 0 1 .75-.75m5.942 0a.75.75 0 0 1 .75.75v4.468a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M17.138 13.645a3.303 3.303 0 1 0 .001 6.605 3.303 3.303 0 0 0 0-6.605m-4.802 3.302a4.803 4.803 0 1 1 9.605 0 4.803 4.803 0 0 1-9.605 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.117 14.84a.75.75 0 0 1 .75.75v1.22l.916.548a.75.75 0 1 1-.77 1.288l-1.28-.766a.75.75 0 0 1-.366-.644V15.59a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMovieTimeOutline;
