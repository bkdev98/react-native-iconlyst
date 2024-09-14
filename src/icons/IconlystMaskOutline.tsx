import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMaskOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.435 4.695a8.25 8.25 0 0 0-8.25 8.25 8.25 8.25 0 0 0 16.499 0 8.25 8.25 0 0 0-8.25-8.25m-9.75 8.25c0-5.385 4.365-9.75 9.75-9.75s9.749 4.365 9.749 9.75-4.365 9.75-9.75 9.75-9.748-4.366-9.748-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.914 11.465a.75.75 0 0 1-.007 1.061l-9 8.883a.75.75 0 1 1-1.053-1.068l9-8.883a.75.75 0 0 1 1.06.007M18.178 5.082a.75.75 0 0 1-.006 1.06l-5.186 5.128a.75.75 0 0 1-1.054-1.066l5.186-5.128a.75.75 0 0 1 1.06.006M20.63 7.69a.75.75 0 0 1-.006 1.06l-7.686 7.609a.75.75 0 1 1-1.056-1.066l7.687-7.61a.75.75 0 0 1 1.06.006"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.371 3.195a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0v-18a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMaskOutline;
