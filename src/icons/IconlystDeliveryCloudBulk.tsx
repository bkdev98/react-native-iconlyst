import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryCloudBulk = ({
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
      d="M20.905 11.827c0 .24-.27.387-.483.28a5.16 5.16 0 0 0-2.336-.54c-2.31 0-3.99 1.4-4.74 3.12-1.62.75-2.69 2.37-2.69 4.33 0 .524.089 1.036.253 1.522.07.205-.076.429-.293.43l-3.39.008h-.02c-1.56 0-2.89-.54-3.84-1.56-.93-.99-1.42-2.36-1.43-3.95l-.01-7.94v-.02c0-3.29 2.11-5.5 5.26-5.51h.34a.3.3 0 0 1 .3.3l.01 7.84a.74.74 0 0 0 .75.75c.08 0 .16-.01.23-.04l2.62-.86 2.6.84c.23.08.47.04.67-.1.19-.14.31-.37.31-.61l-.02-7.84a.3.3 0 0 1 .3-.3h.34c1.49 0 2.77.5 3.72 1.43.99.99 1.54 2.44 1.54 4.08z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m9.332 9.1 1.864-.615a.75.75 0 0 1 .467-.001l1.848.6-.013-6.802a.3.3 0 0 0-.3-.3l-3.574.009a.3.3 0 0 0-.3.3zM18.088 14.812c-1.591 0-1.937 1.547-1.937 1.93a.75.75 0 0 1-.743.75c-.695.005-1.506.407-1.506 1.52 0 .601.349 1.145.89 1.384.267.113.514.126.607.126h5.373c.094 0 .345-.013.648-.13.502-.231.853-.78.853-1.38 0-1.113-.81-1.515-1.506-1.52a.75.75 0 0 1-.744-.75c0-.383-.344-1.93-1.936-1.93m2.683 7.21H15.4a3.2 3.2 0 0 1-1.204-.249 3.02 3.02 0 0 1-1.793-2.761c0-1.505.947-2.66 2.329-2.95.289-1.288 1.376-2.75 3.356-2.75 1.982 0 3.069 1.462 3.358 2.75 1.381.29 2.328 1.445 2.328 2.95 0 1.186-.695 2.27-1.771 2.762a3.4 3.4 0 0 1-1.23.248"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryCloudBulk;
