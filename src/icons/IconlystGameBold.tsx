import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGameBold = ({
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
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M8.36 2c.411 0 .735.328.735.723 0 .289.246.52.54.52h.971c1.482.01 2.69 1.194 2.7 2.64v.183c.931 0 1.864.019 2.806.028 3.405 0 5.888 2.428 5.888 5.78v4.307c0 3.353-2.483 5.78-5.888 5.78-1.364.03-2.728.039-4.102.039s-2.758-.01-4.122-.039C4.483 21.961 2 19.534 2 16.181v-4.306c0-3.353 2.483-5.78 5.898-5.78 1.286-.02 2.6-.04 3.935-.04v-.163c0-.665-.56-1.204-1.227-1.204h-.971c-1.109 0-2.012-.886-2.012-1.965 0-.395.334-.723.736-.723m.725 9.566a.73.73 0 0 0-.736.723v1.012H7.31a.735.735 0 0 0-.736.722c0 .405.334.723.736.723h1.04v1.02c0 .396.324.723.736.723a.735.735 0 0 0 .736-.722v-1.021h1.03a.73.73 0 0 0 .737-.723.735.735 0 0 0-.736-.722h-1.03v-1.012a.735.735 0 0 0-.737-.723m7.714 3.42H16.7a.722.722 0 1 0 0 1.445h.098a.73.73 0 0 0 .736-.722.735.735 0 0 0-.736-.722m-1.678-3.314h-.098a.722.722 0 1 0 0 1.445h.098a.73.73 0 0 0 .736-.722.735.735 0 0 0-.736-.723"
    />
  </Svg>
);
export default IconlystGameBold;
