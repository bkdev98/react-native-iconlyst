import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinCardBulk = ({
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
      d="M13.006 14.725c.026.17-.113.314-.284.314h-9.42c-.171 0-.31-.145-.284-.314.193-1.26 1.155-2.107 2.46-2.107h5.08c1.303 0 2.257.848 2.448 2.107M12.747 16.539a.3.3 0 0 1 .3.3v1.7c0 1.54-1.02 2.6-2.49 2.6h-5.08c-1.47 0-2.5-1.06-2.5-2.6v-1.7a.3.3 0 0 1 .3-.3zM18.337 10.008h-2.76v-2.06h2.6c.03 0 .06 0 .09-.01h.07c.57 0 1.03.47 1.03 1.04s-.46 1.03-1.03 1.03m-2.76-4.96h2.57c.38 0 .7.32.7.7 0 .37-.29.66-.64.69h-.17c-.02 0-.03.01-.05.01h-2.41zm4.35 1.98c.26-.36.42-.8.42-1.28 0-.94-.6-1.73-1.43-2.05v-.34a.749.749 0 1 0-1.5 0v.19h-.98v-.19a.749.749 0 1 0-1.5 0v.19h-.66c-.41 0-.75.34-.75.75 0 .35.23.62.55.71v5.05c-.32.09-.55.36-.55.7 0 .42.33.75.75.75h.66v.18c0 .42.33.75.75.75.41 0 .75-.33.75-.75v-.18h.98v.18c0 .42.33.75.75.75.41 0 .75-.33.75-.75v-.25a2.52 2.52 0 0 0 1.95-2.46 2.5 2.5 0 0 0-.94-1.95"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="m22.058 16.31-1.36-1.661a.752.752 0 0 0-1.161 0l-1.357 1.66a.75.75 0 0 0 .58 1.226h.608v.89c0 .81-.66 1.469-1.471 1.469H16.72a.75.75 0 0 0 0 1.5h1.176a2.974 2.974 0 0 0 2.97-2.97v-.89h.61a.75.75 0 0 0 .58-1.224M4.882 9.684a.75.75 0 0 0 .581-.275L6.82 7.75a.748.748 0 0 0-.58-1.225h-.608v-.89c0-.81.66-1.47 1.471-1.47H8.28a.75.75 0 0 0 0-1.5H7.103a2.974 2.974 0 0 0-2.97 2.97v.89h-.61a.75.75 0 0 0-.58 1.225l1.36 1.66a.75.75 0 0 0 .58.275" />
    </G>
  </Svg>
);
export default IconlystBitcoinCardBulk;
