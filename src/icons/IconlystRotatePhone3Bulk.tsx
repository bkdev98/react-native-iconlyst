import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRotatePhone3Bulk = ({
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
      d="M9.268 20.27c-1.17-.27-2.457-1.017-3.438-2a8 8 0 0 1-1.065-1.32c.236.023.493-.1.647-.316a.75.75 0 0 0-.18-1.045l-1.7-1.2a.749.749 0 0 0-1.163.78c.336 1.456 1.21 2.973 2.4 4.163s2.707 2.065 4.162 2.4a.749.749 0 1 0 .337-1.461M21.63 8.832c-.335-1.455-1.21-2.972-2.4-4.16-1.19-1.192-2.706-2.067-4.161-2.402a.749.749 0 1 0-.337 1.461c1.17.271 2.456 1.018 3.438 2 .399.4.76.85 1.065 1.321a.72.72 0 0 0-.647.316.75.75 0 0 0 .18 1.045l1.699 1.2a.75.75 0 0 0 1.164-.78"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.05 11.551-7.6-7.6c-1.49-1.49-3.99-1.5-5.6 0l-2.9 2.9c-1.49 1.49-1.5 3.99 0 5.6l7.6 7.6c.74.75 1.74 1.12 2.76 1.12 1.01 0 2.04-.37 2.84-1.12l2.9-2.9c1.49-1.49 1.5-3.99.02-5.59-.01 0-.01-.01-.02-.01"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.6 16.551c-.53 0-.95-.42-.95-.95 0-.54.5-.95.95-.95.53 0 .95.42.95.95 0 .54-.5.95-.95.95"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRotatePhone3Bulk;
