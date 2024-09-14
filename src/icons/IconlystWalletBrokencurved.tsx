import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletBrokencurved = ({
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
      d="M21.407 14.422h-3.886a2.563 2.563 0 0 1 0-5.127h1.608M17.958 11.8h-.297M7.842 7.89h4.06"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.855 20.105C4.258 19.204 2.95 16.803 2.95 12c0-6.405 2.325-8.54 9.3-8.54s9.3 2.135 9.3 8.54c0 6.403-2.324 8.539-9.3 8.539"
    />
  </Svg>
);
export default IconlystWalletBrokencurved;
