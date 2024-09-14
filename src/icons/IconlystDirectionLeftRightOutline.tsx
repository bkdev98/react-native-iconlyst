import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDirectionLeftRightOutline = ({
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
      d="M7.573 2.97a.75.75 0 0 1 0 1.06L6.048 5.555h11.904L16.427 4.03a.75.75 0 0 1 1.06-1.06l2.806 2.805a.75.75 0 0 1 0 1.06L17.488 9.64a.75.75 0 1 1-1.061-1.06l1.524-1.525H6.048l1.525 1.524a.75.75 0 0 1-1.06 1.061L3.706 6.835a.75.75 0 0 1 0-1.06L6.512 2.97a.75.75 0 0 1 1.061 0M9.482 12.504c.472.26.795.77.795 1.374v5.817c0 .604-.323 1.114-.795 1.374a1.44 1.44 0 0 1-1.6-.135l-3.693-2.909c-.789-.621-.789-1.856 0-2.478l3.693-2.908a1.44 1.44 0 0 1 1.6-.135m-.708 1.342-3.657 2.88c-.002.002-.02.018-.02.06 0 .043.018.059.02.06l3.657 2.881.003-.032v-5.817zM15.226 13.846l-.004.032v5.817q0 .02.004.032l3.656-2.88c.003-.002.02-.018.02-.06 0-.043-.017-.06-.02-.061zm-.709-1.342a1.44 1.44 0 0 1 1.6.135l3.693 2.908c.789.622.789 1.857 0 2.478l-3.692 2.909a1.44 1.44 0 0 1-1.6.134 1.55 1.55 0 0 1-.796-1.373v-5.817c0-.604.323-1.114.795-1.374"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDirectionLeftRightOutline;
