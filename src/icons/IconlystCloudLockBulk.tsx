import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudLockBulk = ({
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
      fillRule="evenodd"
      d="M21.5 13.645c0-.009-.005-.017-.005-.026-.029-2.525-1.691-4.338-4.124-4.555C17.143 6.928 15.42 4.152 12 4.152S6.856 6.93 6.629 9.066c-2.433.226-4.095 2.038-4.124 4.553 0 .01-.005.017-.005.026l.002.018-.002.02c0 .264.029.523.072.778.027.174.069.338.112.503l.02.072c.508 1.833 2.006 3.08 4.035 3.23a.29.29 0 0 0 .306-.291v-1.367c0-.99.425-1.874 1.094-2.506a.33.33 0 0 0 .102-.218c.126-1.984 1.712-3.524 3.694-3.566 2.024.019 3.717 1.566 3.829 3.563a.33.33 0 0 0 .103.221 3.44 3.44 0 0 1 1.093 2.506v1.368c0 .167.138.303.305.291 2.034-.143 3.536-1.396 4.037-3.246l.009-.034c.046-.173.09-.345.117-.527a4.7 4.7 0 0 0 .072-.778l-.002-.019z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.21 18.276c0 .396-.324.72-.723.72h-2.97a.723.723 0 0 1-.722-.72v-1.67c0-.396.324-.72.723-.72h2.969c.399 0 .723.324.723.72zm-2.225-5.21h.01c.56 0 1.02.45 1.027 1v.32h-2.043v-.307a1.03 1.03 0 0 1 1.006-1.013m2.537 1.588v-.598a2.53 2.53 0 0 0-2.534-2.49h-.026a2.53 2.53 0 0 0-2.483 2.5v.59a2.21 2.21 0 0 0-1.184 1.95v1.67c0 1.224.997 2.22 2.223 2.22h2.969a2.224 2.224 0 0 0 2.223-2.22v-1.67c0-.849-.485-1.579-1.188-1.952"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudLockBulk;
