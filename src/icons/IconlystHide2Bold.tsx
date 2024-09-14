import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHide2Bold = ({
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
      d="M20.13 8.3a.46.46 0 0 0-.36-.19.5.5 0 0 0-.39.14l-3.448 3.496a.33.33 0 0 0-.087.27c.227 1.859-1.97 4.125-3.81 3.828a.33.33 0 0 0-.285.084L9.2 18.44c-.13.12-.18.31-.14.48.05.18.18.31.36.36.81.21 1.68.32 2.59.32 4.97 0 9.49-3.62 9.49-7.6 0-1.25-.47-2.53-1.37-3.7M8.18 12a3.828 3.828 0 0 1 5.633-3.378c.168.089.19.314.056.448l-.688.689a.33.33 0 0 1-.347.066A2.3 2.3 0 0 0 12 9.67a2.33 2.33 0 0 0-2.17 3.15.33.33 0 0 1-.065.354l-.684.685c-.135.134-.36.111-.449-.057A3.8 3.8 0 0 1 8.18 12M20.2 4.86c.29-.29.29-.76 0-1.06a.754.754 0 0 0-1.06 0l-1.97 1.97C15.58 4.89 13.78 4.4 12 4.4c-4.88 0-9.5 3.7-9.5 7.6 0 1.95 1.12 3.91 3.04 5.4L3.8 19.14c-.29.3-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHide2Bold;
