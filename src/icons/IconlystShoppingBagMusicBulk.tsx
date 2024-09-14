import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagMusicBulk = ({
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
      fillRule="evenodd"
      d="M19.945 20.075c-.88 1.01-2.28 1.55-4.04 1.55h-7.82c-1.94 0-3.29-.47-4.12-1.43-.85-.98-1.11-2.41-.82-4.36l.73-5.64c.43-2.43 2.05-3.3 3.32-3.32h9.58c1.28 0 2.84.86 3.37 3.27l.74 5.7c.25 1.79-.06 3.22-.94 4.23"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.79 6.875h-1.51c-.14-1.68-1.56-3-3.28-3h-.01c-1.73 0-3.14 1.32-3.28 3h-1.5c.15-2.52 2.24-4.5 4.77-4.5a4.787 4.787 0 0 1 4.81 4.5M15.219 12.407a.757.757 0 0 1-.885.586 2.8 2.8 0 0 1-.717-.251v3.187l.002.01a2.44 2.44 0 0 1-2.437 2.437 2.44 2.44 0 0 1-2.436-2.437 2.44 2.44 0 0 1 2.436-2.436c.33 0 .647.068.935.188v-2.813a.75.75 0 0 1 1.45-.27c.01.025.319.763 1.066.915a.75.75 0 0 1 .586.884m-3.102 3.522v.015a.94.94 0 0 1-.935.932.937.937 0 0 1 0-1.873c.513 0 .929.415.935.926"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingBagMusicBulk;
