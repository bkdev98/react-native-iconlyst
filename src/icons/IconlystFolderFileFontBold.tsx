import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileFontBold = ({
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
      d="M15.788 11.82a.75.75 0 0 1-1.5 0v-.656h-1.314v4.127h.658a.75.75 0 0 1 0 1.5h-2.813a.75.75 0 0 1 0-1.5h.655v-4.127h-1.312v.657a.75.75 0 0 1-1.5 0v-.937c0-.673.547-1.22 1.219-1.22h4.688a1.22 1.22 0 0 1 1.219 1.22zm.83-6.456h-2.651a1.66 1.66 0 0 1-1.314-.657l-.855-1.14a2.65 2.65 0 0 0-2.111-1.054H7.812c-3.423 0-5.087 1.907-5.087 5.829v7.312c0 3.652 2.184 5.833 5.844 5.833h7.297c3.65 0 5.832-2.181 5.832-5.83l.027-4.658c0-3.845-1.623-5.635-5.106-5.635"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileFontBold;
