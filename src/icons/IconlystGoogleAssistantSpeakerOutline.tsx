import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleAssistantSpeakerOutline = ({
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
      d="M13.85 21.75h-3.2a5.92 5.92 0 0 1-5.9-6.35l.69-9.515a.752.752 0 0 1 1.5.108l-.69 9.516a4.42 4.42 0 0 0 4.412 4.742h3.2a4.415 4.415 0 0 0 4.4-4.726l-.765-11.093a.7.7 0 0 1-.01-.156.763.763 0 0 1 .75-.764.74.74 0 0 1 .749.7q.01.086.009.17l.756 11.043a5.94 5.94 0 0 1-1.577 4.452 5.85 5.85 0 0 1-4.323 1.874"
    />
    <Path
      fill={props.color}
      d="M12.393 14.554a18.5 18.5 0 0 1-6.953-1.428.75.75 0 1 1 .563-1.391 15.51 15.51 0 0 0 12.48.008.75.75 0 1 1 .6 1.374 16.5 16.5 0 0 1-6.69 1.436M10.045 8.063c-2.356 0-4.382-.543-4.583-1.92-.272-1.862 3.106-3.222 6.358-3.7 2.836-.412 5.376-.153 6.47.665a1.6 1.6 0 0 1 .68 1.063c.09.617-.177 1.54-1.965 2.429a15.1 15.1 0 0 1-4.393 1.268q-1.277.189-2.567.195m4.333-4.312q-1.177.006-2.341.18C8.67 4.42 7.01 5.587 6.946 5.946c.158.29 2.08.93 5.45.44 3.367-.491 5.027-1.655 5.09-2.014-.117-.215-1.196-.621-3.108-.621"
    />
  </Svg>
);
export default IconlystGoogleAssistantSpeakerOutline;
