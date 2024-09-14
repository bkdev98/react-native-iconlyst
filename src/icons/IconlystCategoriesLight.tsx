import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCategoriesLight = ({
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
      d="m14.598 3.436 5.545 3.251a1.6 1.6 0 0 1 0 2.76l-5.545 3.25a3.18 3.18 0 0 1-3.214 0L5.84 9.447a1.6 1.6 0 0 1 0-2.76l5.545-3.25a3.18 3.18 0 0 1 3.214 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.768 11.75-4.157 2.765a1.6 1.6 0 0 0 .078 2.71l5.694 3.338a3.18 3.18 0 0 0 3.213 0l5.675-3.326a1.6 1.6 0 0 0 .068-2.718l-4.186-2.735"
    />
  </Svg>
);
export default IconlystCategoriesLight;
