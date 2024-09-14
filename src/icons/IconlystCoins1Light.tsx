import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoins1Light = ({
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
      d="M20.15 14.3c0 1.346-2.115 2.438-4.722 2.438s-4.721-1.092-4.721-2.437M8.573 12.137c-2.607 0-4.721-1.091-4.721-2.438"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.852 5.438v8.524c0 1.347 2.114 2.438 4.721 2.438"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.573 7.874c-2.607 0-4.721-1.09-4.721-2.437C3.852 4.092 5.966 3 8.573 3s4.722 1.092 4.722 2.437M20.15 10.04v8.524c0 1.346-2.115 2.437-4.722 2.437s-4.721-1.09-4.721-2.437v-8.525"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.15 10.039c0 1.345-2.115 2.437-4.722 2.437s-4.721-1.092-4.721-2.437c0-1.346 2.113-2.437 4.72-2.437 2.608 0 4.723 1.091 4.723 2.437"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoins1Light;
