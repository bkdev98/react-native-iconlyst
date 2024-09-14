import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFactomTwoTone = ({
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
      d="m15.42 17.752-.376.203c-2.629 1.348-5.103 1.986-6.309 1.705"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.544 9.299c-.109 1.502-2.749 4.03-6.463 6.008l-.218.113M9.366 17.23c-1.686.455-3.06.526-3.811.15"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.689 13.34c-.375.864-1.502 2.005-3.12 3.113"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.437 17.584c-.424.676-1.502 1.555-2.872 2.29-1.296.692-2.543 1.09-3.35 1.127M16.501 4.314c.594 1.127-1.836 3.568-5.422 5.487a19 19 0 0 1-1.153.575"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.13 6.094c.706 1.322-2.197 4.243-6.478 6.534s-8.344 3.072-9.05 1.754"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.542 11.585c-1.566.375-2.719.277-3.042-.327"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.178 6.598q-.31.18-.642.376c-2.366 1.265-4.6 1.697-4.991.969-.39-.729 1.213-2.343 3.582-3.609 2.37-1.266 4.62-1.712 4.995-.984.188.353-.094.916-.702 1.547"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFactomTwoTone;
