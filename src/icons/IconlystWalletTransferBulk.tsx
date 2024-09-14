import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletTransferBulk = ({
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
      d="M14.82 11.866c0-1.82 1.47-3.29 3.28-3.29h4.008a.29.29 0 0 0 .292-.302 5.445 5.445 0 0 0-5.43-5.098H8.84c-2.99 0-5.43 2.44-5.43 5.44v3.316c0 .267.349.422.595.319q.077-.033.155-.055c.647-.277 1.431-.226 2.05.1a2 2 0 0 1 .6.42l.03.03.352.34c.144.14.382.101.501-.06a2.5 2.5 0 0 1 4.507 1.489v1.29c0 .132.086.246.206.297a2.496 2.496 0 0 1 .764 4.104l-.077.074a.3.3 0 0 0 .209.516h3.668c3.023 0 5.286-2.444 5.432-5.35a.29.29 0 0 0-.292-.3H18.1c-1.81 0-3.28-1.47-3.28-3.28"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.95 11.804c0 .41-.34.75-.75.75h-.01a.749.749 0 1 1 0-1.5c.42 0 .76.33.76.75m-2.63.06c0 .98.8 1.78 1.78 1.78h4.01a.3.3 0 0 0 .3-.3v-2.97a.3.3 0 0 0-.3-.3H18.1c-.98 0-1.78.8-1.78 1.79M10.916 17.865l-.463.446v-3.797a.75.75 0 0 0-1.5 0v3.796l-.462-.445a.75.75 0 0 0-1.04 1.08l1.721 1.659.003.003a.8.8 0 0 0 .512.215c.18 0 .405-.078.538-.207l1.732-1.67a.75.75 0 0 0-1.04-1.08M7.326 15.644l-1.72-1.658-.012-.012a.77.77 0 0 0-1.04 0l-1.735 1.67a.751.751 0 0 0 1.041 1.08l.464-.447v3.798a.75.75 0 0 0 1.5 0V16.28l.461.444a.75.75 0 1 0 1.041-1.08"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletTransferBulk;
