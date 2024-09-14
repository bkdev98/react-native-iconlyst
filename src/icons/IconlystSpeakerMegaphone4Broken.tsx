import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerMegaphone4Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.353 14.97a43.5 43.5 0 0 0-5.678-1.424c-1.454-.26-2.177-1.524-2.175-3l.001-1.099c.002-1.473.725-2.739 2.176-2.993a44 44 0 0 0 6.852-1.801M11.353 14.97c1.22.394 2.522.873 3.87 1.454 1.612.694 3.41-.455 3.413-2.209l.01-7.465c.003-2.69-1.794-3.84-3.408-3.15m-3.885 11.37v-.006m0 .006v.004"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.637 13.344a3.366 3.366 0 0 0 .008-6.656M6.797 13.762c.464 1.544 1.098 3.694 1.572 5.2.104.332.246.664.455.938.436.616 1.307.853 1.99.588.672-.256 1.09-.92 1.023-1.706-.014-.204-.065-.64-.131-1.164M7.878 6.035 7.873 9.76"
    />
  </Svg>
);
export default IconlystSpeakerMegaphone4Broken;
