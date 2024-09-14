import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneLockBulk = ({
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
      d="M8.963 15.597a686 686 0 0 0 9.794-4.054c1.314-.55 2.528-1.865 2.084-3.454-.189-.674-.6-1.19-1.19-1.493-1.13-.583-2.485-.202-3.017-.008A49 49 0 0 0 13.6 7.841l-.01-.01a176 176 0 0 0-3.44-3.074c-.786-.69-1.605-.942-2.439-.745-.46.11-.894.277-1.315.44q-.252.097-.515.193a.75.75 0 0 0-.439.993l1.963 4.75c-.73.308-1.633.692-2.463 1.045l-.969.413-.182-.442-.099-.24a.75.75 0 0 0-1.386.574l.097.236c.14.337.357.866.421 1.011l.04.092.018.046a1 1 0 0 0 .04.08c.856 1.843 2.271 2.82 3.983 2.82.65 0 1.34-.14 2.058-.426"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.14 19.243H4.864a.75.75 0 0 0 0 1.5h7.274a.75.75 0 0 0 0-1.5M20.25 19.353c0 .252-.198.45-.453.45h-2.424a.446.446 0 0 1-.451-.45v-1.36c0-.248.203-.45.451-.45h2.424c.25 0 .453.202.453.45zm-1.672-4.11a.69.69 0 0 1 .495.198c.133.13.207.304.21.482v.12H17.89v-.118a.7.7 0 0 1 .688-.682m2.204 1.076v-.404a2.18 2.18 0 0 0-.662-1.547 2.16 2.16 0 0 0-1.56-.625 2.19 2.19 0 0 0-2.17 2.17v.406a1.94 1.94 0 0 0-.969 1.674v1.36c0 1.075.877 1.95 1.953 1.95h2.424a1.954 1.954 0 0 0 1.953-1.95v-1.36c0-.715-.393-1.334-.969-1.674"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaneLockBulk;
