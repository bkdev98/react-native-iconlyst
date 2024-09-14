import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneSecurityBulk = ({
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
      d="M9.232 15.818a554 554 0 0 0 10.26-4.244c1.365-.57 2.623-1.93 2.163-3.563-.194-.699-.619-1.235-1.227-1.548-1.17-.604-2.578-.205-3.129-.007-1.088.393-2.137.854-3.23 1.295a165 165 0 0 0-3.603-3.214c-.825-.722-1.67-.986-2.527-.784-.478.118-.932.292-1.37.461q-.264.103-.538.202a.75.75 0 0 0-.439.991l2.071 5.015-1.073.455c-.878.373-1.83.777-2.59 1.096l-.308-.748a.751.751 0 0 0-1.387.573l.543 1.318c.878 2.057 2.391 3.151 4.234 3.151.677 0 1.4-.148 2.15-.449"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.573 19.712H4.952a.75.75 0 0 0 0 1.5h7.62a.75.75 0 0 0 0-1.5M20.24 16.671c-.005.326-.013.772-.013 1.39 0 1.132-1.175 1.743-1.673 1.95-.5-.207-1.674-.817-1.674-1.95 0-.615-.008-1.06-.014-1.387-.003-.188-.007-.359-.006-.482.447-.199 1.465-.55 1.656-.583.273.034 1.383.414 1.73.558.002.123-.002.304-.005.504m-1.686-2.56c-.456 0-2.464.664-2.841 1.033-.368.36-.363.686-.347 1.557.006.321.014.757.014 1.36 0 2.548 2.837 3.432 2.958 3.468a.75.75 0 0 0 .432 0c.12-.036 2.957-.92 2.957-3.468 0-.606.008-1.043.014-1.363.016-.857.02-1.177-.333-1.539-.386-.398-2.436-1.048-2.854-1.048"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaneSecurityBulk;
