import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBeetRadishTwoTone = ({
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
      d="M18.215 13.543c0 4.285-5.225 5.511-6.215 7.457-.87-1.834-6.214-3.172-6.214-7.457 0-2.746 2.782-4.972 6.214-4.972s6.215 2.226 6.215 4.972"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.036 13.39c0-.953-.965-1.725-2.155-1.725M12 8.566c1.197-.91 4.206-1.235 4.206-2.914 0-1.364-1.712-2.04-2.652-1.098C13.554 3.707 12.846 3 12 3c-.858 0-1.554.696-1.554 1.554-.964-.966-2.651-.232-2.651 1.098C7.795 7.33 10.904 7.52 12 8.57"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBeetRadishTwoTone;
