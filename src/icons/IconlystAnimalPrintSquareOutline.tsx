import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnimalPrintSquareOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M16.215 22.056h-8.43c-3.31 0-5.53-2.32-5.53-5.78v-7.95c0-3.45 2.22-5.78 5.53-5.78h8.43c3.31 0 5.53 2.32 5.53 5.78v7.95c0 3.46-2.22 5.78-5.53 5.78m-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.95c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28v-7.95c0-2.6-1.58-4.28-4.03-4.28z"
    />
    <Path
      fill={props.color}
      d="M11.985 9.485c-.55 0-1-.45-1-1a.99.99 0 0 1 1-.99c.55 0 1 .45 1 1s-.45 1-1 1zM15.565 11.305c-.55 0-1-.45-1-1a.99.99 0 0 1 1-.99c.55 0 1 .45 1 1s-.45 1-1 1zM8.425 11.305c-.55 0-1-.45-1-1a.99.99 0 0 1 1-.99c.55 0 1 .45 1 1s-.45 1-1 1zM9.625 17.116c-.33 0-.65-.07-.94-.26-.41-.27-.67-.72-.76-1.34-.13-.82.14-1.68.76-2.41.81-.95 2.09-1.55 3.34-1.55 2.18 0 4.11 1.71 4.12 3.65 0 .71-.18 1.22-.59 1.55-.64.52-1.5.31-2.33.11-.42-.1-.85-.2-1.21-.2-.3 0-.7.11-1.08.21-.43.11-.88.24-1.32.24zm2.4-4.05c-.81 0-1.67.4-2.2 1.02-.19.23-.5.68-.42 1.2.04.26.1.32.1.32.14.07.73-.09 1.05-.17.45-.12.97-.26 1.47-.26.53 0 1.08.13 1.56.25.33.08.87.21 1.05.16 0-.02.02-.12.02-.35 0-1.12-1.28-2.17-2.63-2.17"
    />
  </Svg>
);
export default IconlystAnimalPrintSquareOutline;
