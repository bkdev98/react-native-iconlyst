import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpadesSymbolsOutline = ({
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
      d="M12.248 2.25c-.497-.002-.86.282-1.034.433zm-1.034.433-.35.3-4.766 4.093-.011.01c-1.11.995-2.05 2.255-2.518 3.753l-.001.004c-.405 1.326-.313 2.783.202 4.05.54 1.329 1.621 2.414 3.047 2.847 1.012.31 2.06.328 3.043.017-.193.66-.557 1.385-1.235 1.974-.407.353-.428.87-.33 1.206.099.337.424.813 1.036.813h5.91c.568 0 .908-.416 1.02-.77.109-.349.07-.844-.32-1.184a4.5 4.5 0 0 1-1.337-2.041c.615.186 1.253.238 1.924.196h.003c2.046-.138 3.7-1.5 4.328-3.405.39-1.167.447-2.468.074-3.676-.498-1.61-1.507-2.937-2.75-3.97l-4.908-4.215c-.174-.15-.534-.433-1.027-.435m-.005 1.528-.05.041-.351.301-4.76 4.089c-.959.86-1.713 1.898-2.08 3.074-.298.98-.234 2.082.158 3.045.387.954 1.144 1.69 2.094 1.977h.002c1.103.34 2.198.194 3.118-.467a.75.75 0 0 1 1.188.625c-.017.8-.207 2.418-1.351 3.787h4.08a6 6 0 0 1-1.394-3.8.75.75 0 0 1 1.182-.607c.715.504 1.442.668 2.353.61 1.405-.095 2.556-1.023 3.004-2.378v-.003c.3-.9.335-1.879.064-2.758m-7.257-7.536.052.043.002.002 4.913 4.219.01.008c1.069.887 1.883 1.983 2.28 3.263"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpadesSymbolsOutline;
