import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarBadge2Bulk = ({
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
      d="M7.47 17.876c0 1.03-.83 1.86-1.86 1.86l-.011.002a1.84 1.84 0 0 1-1.298-.537 1.87 1.87 0 0 1-.551-1.32V10.64a.39.39 0 0 1 .17-.341.21.21 0 0 1 .21-.018l.663.355a2.2 2.2 0 0 0 1.891.05l.786-.348zm13.4-14.16c-.52-.31-1.15-.34-1.71-.06l-.64.35a.7.7 0 0 1-.6.01l-1.85-.83c-.94-.4-1.98-.4-2.93.01l-1.85.82c-.2.09-.41.09-.58-.01l-.67-.36c-.54-.27-1.17-.24-1.68.08-.56.34-.89.94-.89 1.61v3.388c-.049.014-.099.014-.146.04l-1.246.55a.68.68 0 0 1-.586-.006l-.667-.357a1.73 1.73 0 0 0-1.69.068 1.88 1.88 0 0 0-.885 1.62v7.242c0 .892.351 1.738.988 2.378.63.631 1.473.98 2.376.98.006 0 .012-.004.018-.004H17.75c2.46 0 3.99-1.69 3.99-4.42l.01-11.48c0-.67-.33-1.28-.88-1.62"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.186 15.44v-.258a1.937 1.937 0 0 0 1.867-1.931 1.936 1.936 0 0 0-1.937-1.931h-1.36a.439.439 0 0 1 0-.88h2.207a.75.75 0 0 0 0-1.5h-.777v-.25a.75.75 0 0 0-1.5 0v.256a1.937 1.937 0 0 0 .07 3.874h1.36a.434.434 0 1 1 0 .87H12.91a.75.75 0 0 0 0 1.5h.777v.25a.75.75 0 0 0 1.5 0"
    />
  </Svg>
);
export default IconlystDollarBadge2Bulk;
