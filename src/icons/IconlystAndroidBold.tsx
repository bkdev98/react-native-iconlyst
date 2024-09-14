import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAndroidBold = ({
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
      d="M14.56 8.778c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75.41 0 .75.33.75.74zm-3.89 0c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75.41 0 .75.33.75.74zm5.438-2.501a.31.31 0 0 1-.053-.406l1.065-1.553c.24-.34.15-.81-.19-1.04a.74.74 0 0 0-1.04.19l-1.112 1.615a.31.31 0 0 1-.384.103 5.9 5.9 0 0 0-2.414-.498c-.866 0-1.699.178-2.448.514a.31.31 0 0 1-.39-.108L8.08 3.478a.745.745 0 0 0-1.04-.21c-.34.23-.44.69-.21 1.04l1.052 1.595a.31.31 0 0 1-.055.4 6.13 6.13 0 0 0-2.017 4.555c0 .115.094.21.21.21h11.92a.21.21 0 0 0 .21-.21 6.17 6.17 0 0 0-2.042-4.581M6.11 12.567a.3.3 0 0 0-.3.3v4.92c0 .71.57 1.28 1.27 1.28h1.57a.3.3 0 0 1 .3.3v1.76c0 .42.34.75.75.75.42 0 .75-.33.75-.75v-1.76a.3.3 0 0 1 .3-.3H13a.3.3 0 0 1 .3.3v1.76c0 .42.33.75.75.75.41 0 .75-.33.75-.75v-1.76a.3.3 0 0 1 .3-.3h1.78c.7 0 1.27-.57 1.27-1.28v-4.92a.3.3 0 0 0-.3-.3zM3 10.757c-.41 0-.75.34-.75.75v4.68a.749.749 0 1 0 1.5 0v-4.68c0-.41-.34-.75-.75-.75M21 10.757c-.41 0-.75.34-.75.75v4.68a.749.749 0 1 0 1.5 0v-4.68c0-.41-.34-.75-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAndroidBold;
