import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneEditLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.574 13.039c1.206-.501 3.587-1.524 4.813-2.034L6.139 5.558c.608-.217 1.166-.47 1.75-.61.681-.162 1.269.146 1.771.586a181 181 0 0 1 3.425 3.057c.285.262.51.286.85.137.979-.432 1.96-.862 2.965-1.224 1.162-.42 2.817-.463 3.227 1.002.325 1.156-.67 2.141-1.652 2.555a603 603 0 0 1-9.788 4.049c-2.335.936-4.182.118-5.172-2.204-.088-.208-.429-1.032-.515-1.242M4.867 20.204h7.686"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.71 20.204-.76.127a.85.85 0 0 1-.988-.93l.086-.786c.04-.377.199-.734.452-1.017l2.993-3.297a1.043 1.043 0 0 1 1.474-.056l.7.646c.422.391.448 1.052.056 1.475l-2.956 3.256a1.82 1.82 0 0 1-1.058.582"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaneEditLight;
