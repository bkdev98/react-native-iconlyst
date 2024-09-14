import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyBagBroken = ({
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
      d="M11.242 8.318q1.957.108 3.916-.341"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.31 11.376c-.69-1.148-1.432-2.285-2.154-3.415l1.806-4.125s-1.538.204-1.939.228c-1.377.077-2.665-.296-3.933-.79-1.332-.517-2.564-.291-3.69.58-.376.292-.527.422-.527.422l1.973 3.692c-.722 1.13-1.466 2.26-2.156 3.408-1.135 1.888-2.22 3.994-1.34 6.185C6.371 20.11 9.354 20.958 12 21c2.645-.042 5.628-.888 6.65-3.44.478-1.19.376-2.355 0-3.474"
    />
  </Svg>
);
export default IconlystMoneyBagBroken;
