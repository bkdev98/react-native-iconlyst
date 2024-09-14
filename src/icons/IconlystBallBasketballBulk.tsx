import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBallBasketballBulk = ({
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
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M21.5 12c0 .25-.01.5-.03.74a9.37 9.37 0 0 1-2.25 5.42c-.32.38-.68.74-1.06 1.07a9.42 9.42 0 0 1-5.42 2.24 9.718 9.718 0 0 1-1.51 0 9.4 9.4 0 0 1-6.45-3.31A9.35 9.35 0 0 1 2.5 12c0-.25.01-.5.03-.74.16-2.06.97-3.94 2.25-5.42.32-.38.68-.74 1.06-1.06a9.37 9.37 0 0 1 5.42-2.25 9.718 9.718 0 0 1 1.51 0c2.05.16 3.92.98 5.39 2.25.38.32.74.68 1.06 1.06A9.35 9.35 0 0 1 21.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.47 11.23c-2.1-.07-4.01-.86-5.5-2.14l3.25-3.25c-.32-.38-.68-.74-1.06-1.06l-3.25 3.25a8.86 8.86 0 0 1-2.14-5.5 10 10 0 0 0-1.51 0c.08 2.51 1.04 4.79 2.59 6.56L12 10.94 5.84 4.78c-.38.32-.74.68-1.06 1.06L10.94 12l-1.85 1.85a10.48 10.48 0 0 0-6.56-2.59 9.718 9.718 0 0 0 0 1.51c2.1.07 4.01.87 5.5 2.14l-3.25 3.25c.32.38.68.74 1.06 1.07l3.25-3.26a8.88 8.88 0 0 1 2.14 5.5 10 10 0 0 0 1.51 0c-.08-2.51-1.04-4.78-2.59-6.56L12 13.06l6.16 6.17c.38-.33.74-.69 1.06-1.07L13.06 12l1.85-1.85c1.77 1.55 4.05 2.51 6.56 2.59z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBallBasketballBulk;
