import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoaderTruckBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M13.415 17.47a1.16 1.16 0 1 1 .002-2.322 1.16 1.16 0 0 1-.002 2.321m-7.26 0a1.16 1.16 0 1 1 .002-2.322 1.16 1.16 0 0 1-.002 2.321m1.25-10.74c0-.111.09-.2.2-.2h2.59c.14 0 .28.04.41.1.12.07.23.17.3.27l1.994 3.122a.2.2 0 0 1-.169.307H7.605a.2.2 0 0 1-.2-.2zm14.97 9.07h-.31l-2.77-4.55a.51.51 0 0 0-.43-.24h-2c-.28 0-.5.23-.5.5v.91l-1.19-.88c.01-.25-.03-.5-.1-.73 0-.01 0-.02-.01-.03-.07-.22-.17-.43-.3-.61l-2.61-4.1c-.21-.32-.51-.58-.85-.76s-.72-.28-1.11-.28h-2.91c-.37.01-.72.16-.98.42s-.4.61-.4.98v3.76h-1.81c-.65 0-1.29.27-1.75.73a2.45 2.45 0 0 0-.72 1.74v3.67c0 .42.34.75.75.75h1.25a2.65 2.65 0 0 0 2.53 1.89c1.21 0 2.21-.81 2.54-1.91h2.18c.33 1.1 1.33 1.91 2.54 1.91 1.47 0 2.66-1.19 2.66-2.66 0-.78-.35-1.49-.9-1.97v-.93l1.19.88c0 .66.25 1.28.71 1.75q.36.375.84.57c.31.13.63.19.95.19h3.51c.28 0 .5-.22.5-.5 0-.27-.22-.5-.5-.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoaderTruckBold;
