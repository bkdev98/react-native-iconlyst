import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGalleryViewEditOutline = ({
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
      d="M4.99 5.328C4.375 5.988 4 6.957 4 8.164v7.351c0 1.208.375 2.174.99 2.831.608.652 1.508 1.061 2.687 1.061h3.257a.75.75 0 0 1 0 1.5H7.677c-1.547 0-2.86-.549-3.784-1.536-.918-.983-1.393-2.337-1.393-3.856v-7.35c0-1.518.475-2.875 1.392-3.86.923-.99 2.237-1.541 3.785-1.541h7.79c1.553 0 2.867.551 3.788 1.542.916.985 1.389 2.342 1.389 3.858v1.953a.75.75 0 1 1-1.5 0V8.164c0-1.208-.374-2.177-.987-2.836-.608-.653-1.507-1.064-2.69-1.064h-7.79c-1.178 0-2.078.41-2.687 1.064"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.874 13.57-3.862 4.215c-.19.213-.308.482-.339.767l-.099.915a.244.244 0 0 0 .282.267l.888-.15c.307-.05.59-.206.8-.44l.005-.006 3.823-4.172.003-.003a.47.47 0 0 0-.025-.661l-.816-.755a.47.47 0 0 0-.66.024m-1.102-1.017a1.97 1.97 0 0 1 2.781-.107l.815.755c.797.737.846 1.981.11 2.78l-3.82 4.167a2.88 2.88 0 0 1-1.667.916l-.886.15a1.744 1.744 0 0 1-2.022-1.908l.099-.915c.064-.597.314-1.16.715-1.609l.006-.007zM14.379 2.773a.75.75 0 0 1 .75.75v4.79h4.765a.75.75 0 0 1 0 1.5h-4.765v2.14a.75.75 0 0 1-1.5 0v-2.14h-4.09v4.089h2.14a.75.75 0 0 1 0 1.5H9.54v4.755a.75.75 0 0 1-1.5 0v-4.755H3.25a.75.75 0 0 1 0-1.5h4.788V9.814H3.252a.75.75 0 0 1 0-1.5h4.786V3.527a.75.75 0 1 1 1.5 0v4.787h4.09v-4.79a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGalleryViewEditOutline;
