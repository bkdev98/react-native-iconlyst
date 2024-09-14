import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCameraDisbaleBulk = ({
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
      d="M18.944 20.915c-.14.14-.33.2-.51.2-.2 0-.4-.07-.55-.23l-1.81-1.91c-.68.44-1.51.69-2.46.69h-6.79c-2.6 0-4.35-1.83-4.35-4.55v-6.4c0-1.24.37-2.28 1.02-3.06l-1.43-1.51c-.29-.3-.27-.78.03-1.06.29-.27.74-.27 1.03 0l14.02 14.83 1.8 1.91.03.03c.29.3.27.78-.03 1.06"
      clipRule="evenodd"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M23.405 7.06a1.796 1.796 0 0 0-2.52-.248L19.66 7.816c-.257.21-.376.534-.36.866q.003.057.003.116v6.4q0 .063-.003.123c-.017.331.102.654.358.865l1.214.998c.316.26.72.404 1.134.404.986 0 1.791-.802 1.794-1.79l.012-7.597a1.8 1.8 0 0 0-.406-1.14" />
      <Path
        fillRule="evenodd"
        d="M17.91 15.908c-.033.233-.314.307-.475.136L6.635 4.618c-.166-.176-.066-.453.176-.454h6.802c2.6 0 4.35 1.83 4.35 4.55v6.4q0 .413-.053.794"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default IconlystVideoCameraDisbaleBulk;
