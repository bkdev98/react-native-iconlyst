import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeavesOutline = ({
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
      d="m16.67 15.322.01-.007c.31-.213.615-.456.932-.715l.185-.152c.253-.208.517-.424.777-.62a2.33 2.33 0 0 1 3.057.219c.911.914.911 2.396 0 3.312l-.225.226c-1.234 1.242-2.487 2.504-4.36 3.23-2.69 1.048-5.19.554-7.654.066l-.146-.028c-.76-.151-1.477-.184-2.28-.19a2 2 0 0 1-.254.343c-.378.406-.903.614-1.48.614H4.203a.75.75 0 0 1 0-1.5h1.029c.207 0 .32-.068.382-.135.07-.074.14-.215.14-.453v-4.59c0-.239-.07-.38-.14-.453-.064-.068-.175-.136-.382-.136H4.203a.75.75 0 0 1 0-1.5h1.029c.578 0 1.103.209 1.48.614q.141.152.245.327c1.17-.79 2.479-1.57 4.183-1.612 1.28-.031 2.487.212 3.635.5 1.094.275 1.907 1.204 1.907 2.39q0 .127-.012.25m-2.807.674a8 8 0 0 0-.814.009h-.258a.75.75 0 0 0-.747.822l.007.067c.06.41.44.694.85.634q.1-.015.204-.023h.96c.266.01.56.021.845.015 1.024-.025 1.893-.47 2.62-.97.364-.25.71-.526 1.031-.789q.288-.236.551-.45.184-.149.364-.284a.83.83 0 0 1 1.092.078.85.85 0 0 1 0 1.195l-.168.17c-1.283 1.288-2.33 2.339-3.896 2.948-2.278.886-4.39.472-6.967-.037-.795-.158-1.54-.203-2.282-.215v-3.758l.144-.098c1.316-.894 2.346-1.593 3.777-1.628 1.076-.026 2.124.177 3.233.454.484.123.773.495.773.936 0 .515-.405.933-1.02.934zM11.403 8.062a8 8 0 0 1-.479.073.75.75 0 0 0 .18 1.489 9 9 0 0 0 1.223-.232c1.259 1.382 2.876 1.435 4.049 1.065 1.42-.45 2.5-1.576 3.13-2.78.917-1.753 1.208-3.49 1.234-3.937a.75.75 0 0 0-.413-.714c-.4-.201-2.049-.817-4.026-.9-1.357-.057-2.874.316-3.972 1.32-.508.466-.852 1.15-1.04 1.827-.189.68-.246 1.45-.086 2.133q.088.374.2.656m1.448-.429a3 3 0 0 1-.188-.568c-.089-.383-.067-.891.072-1.392.14-.505.372-.905.606-1.12.731-.668 1.821-.973 2.897-.928 1.234.052 2.316.343 2.925.55a10.8 10.8 0 0 1-.986 2.807c-.5.954-1.309 1.746-2.253 2.044-.607.192-1.339.212-2.01-.23 1.29-.643 2.309-1.573 3.18-2.613a.75.75 0 0 0-1.15-.962c-.877 1.046-1.857 1.894-3.093 2.412"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeavesOutline;