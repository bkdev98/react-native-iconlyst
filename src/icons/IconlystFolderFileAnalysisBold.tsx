import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileAnalysisBold = ({
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
      d="m16.325 11.799-2.2 2.839a.75.75 0 0 1-1.056.13l-1.97-1.544-1.785 2.32a.75.75 0 1 1-1.19-.913l2.249-2.922a.746.746 0 0 1 1.057-.133l1.97 1.547 1.739-2.242a.75.75 0 1 1 1.186.918m.295-6.435h-2.652a1.66 1.66 0 0 1-1.314-.657l-.855-1.138a2.65 2.65 0 0 0-2.111-1.055H7.813c-3.424 0-5.088 1.906-5.088 5.828v7.312c0 3.653 2.185 5.833 5.845 5.833h7.297c3.65 0 5.832-2.18 5.832-5.83l.026-4.658c0-3.845-1.622-5.635-5.105-5.635"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileAnalysisBold;
