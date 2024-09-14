import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailLoveLikeLight = ({
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
      d="M20.314 10.392V8.775c0-2.658-1.774-4.822-4.407-4.822h-8.5C4.775 3.953 3 6.117 3 8.775v5.946c0 2.66 1.775 4.822 4.407 4.816h4.17"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.766 9.019-3.846 3.128a1.99 1.99 0 0 1-2.476 0l-3.88-3.128"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.97 17.004c-.347-1.086.058-2.326 1.198-2.693.6-.19 1.254-.08 1.757.297a1.96 1.96 0 0 1 1.755-.296c1.139.366 1.548 1.606 1.2 2.692-.54 1.718-2.955 3.043-2.955 3.043s-2.395-1.305-2.955-3.043"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailLoveLikeLight;
