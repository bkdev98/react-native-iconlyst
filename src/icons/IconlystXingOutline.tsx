import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystXingOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.617 6.097a1.154 1.154 0 0 1 1.045-1.644h2.735c.6 0 1.147.345 1.406.886l1.422 2.978-.676.323.676-.323c.22.461.2 1-.053 1.444L8.225 14.92a1.56 1.56 0 0 1-1.352.784h-2.69a1.154 1.154 0 0 1-1.007-1.717l.647.362-.647-.363 2.786-4.968a.06.06 0 0 0 .002-.052zm1.59-.144 1.115 2.374c.214.455.195.986-.051 1.424l-2.497 4.452h2.099c.02 0 .04-.01.05-.028L9.87 9.017a.06.06 0 0 0 .002-.053L8.449 5.986l.666-.318-.666.318a.06.06 0 0 0-.052-.033zM15.774 3.04c.276-.488.794-.79 1.355-.79h2.688c.882 0 1.438.948 1.007 1.717l-5.502 9.827c-.01.018-.01.04 0 .057l3.713 6.15c.464.768-.09 1.749-.988 1.749h-2.711a1.56 1.56 0 0 1-1.33-.748l-3.874-6.37a1.56 1.56 0 0 1-.025-1.576zm1.355.71c-.02 0-.04.011-.05.03l-5.666 10.014a.06.06 0 0 0 0 .058l3.874 6.37c.01.018.029.028.049.028h2.097l-3.394-5.623c-.29-.48-.3-1.078-.026-1.566l5.214-9.311z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystXingOutline;
