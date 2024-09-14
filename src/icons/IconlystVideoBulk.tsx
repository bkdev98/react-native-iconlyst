import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="M21.331 7.443a1.38 1.38 0 0 0-1.373-.064l-1.482.748a1.62 1.62 0 0 0-.888 1.456v5.833c0 .621.34 1.179.888 1.457l1.481.747c.201.104.416.154.631.154A1.429 1.429 0 0 0 22 16.339V8.662c0-.5-.25-.956-.669-1.22"
        opacity={0.4}
      />
      <Path d="M11.905 20H6.113C3.691 20 2 18.33 2 15.94V9.06C2 6.67 3.691 5 6.113 5h5.792c2.422 0 4.113 1.669 4.113 4.06v6.88c0 2.39-1.69 4.06-4.113 4.06" />
    </G>
  </Svg>
);
export default IconlystVideoBulk;
